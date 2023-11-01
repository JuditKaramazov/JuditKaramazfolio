import { render } from '@testing-library/react'
import repos from '../../../tests/__fixtures__/repos.json'
import Repo from '../../interfaces/repo'
import Repository from '../Repository'

describe('Repository', () => {
  it('renders homepage link when it is been previously provided', () => {
    const repo = {
      name: 'Hello',
      full_name: 'JuditKaramazov/hello',
      homepage: 'hello'
    }

    const { container } = render(<Repository repo={repo as Repo} />)
    expect(container.querySelectorAll('p:last-child a').length).toBe(0)
  })

  it('renders no link without homepage', () => {
    const repo = { name: 'Hello', full_name: 'repo/hello' }

    const { container } = render(<Repository repo={repo as Repo} />)
    expect(container.querySelectorAll('p:last-child a').length).toBe(2)
  })
})
