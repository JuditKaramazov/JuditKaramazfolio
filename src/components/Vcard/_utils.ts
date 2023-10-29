import saveAs from 'file-saver'
import vCard from 'vcf'

export async function toDataURL(photoSrc: string, outputFormat) {
  const img = new Image()
  img.crossOrigin = 'Anonymous'
  img.src = photoSrc

  img.onload = () => {}

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  let dataURL

  canvas.height = img.naturalHeight
  canvas.width = img.naturalWidth
  ctx.drawImage(img, 0, 0)
  dataURL = canvas.toDataURL(outputFormat)

  return dataURL
}

export async function constructVcard(meta, dataUrl: string) {
  const contact = new vCard()
  const github = meta.profiles.filter(({ network }) => network === 'GitHub')[0]
    .url

  contact.set('fn', meta.name)
  contact.set('title', meta.label)
  contact.set('email', meta.email)
  contact.set('nickname', 'JuditKaramazov')
  contact.set('url', meta.url, { type: 'Portfolio' })
  contact.add('x-socialprofile', github, { type: 'GitHub' })

  const vcard = contact.toString('3.0')

  return vcard
}

export async function init(meta) {
  const dataUrl = await toDataURL(meta.photoSrc, 'image/jpeg')
  const vcard = await constructVcard(meta, dataUrl)

  const { addressbook } = meta
  const name = addressbook.split('/').join('')
  const blob = new Blob([vcard], {
    type: 'text/x-vcard'
  })
  saveAs(blob, name)
}
