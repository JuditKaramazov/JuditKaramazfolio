import { jest } from '@jest/globals'
import '@testing-library/jest-dom'
import 'jest-canvas-mock'
import giphy from './__fixtures__/giphy.json'
import { dataLocation } from './__fixtures__/location'
import './__mocks__/matchMedia'

process.env.GITHUB_TOKEN = 'very_good_and_mocked_token'

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    route: '/',
    pathname: '/'
  }))
}))

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    }
  }
})

jest.mock('../src/hooks/useLocation', () => ({
  useLocation: jest.fn().mockImplementation(() => dataLocation)
}))

jest.mock('@giphy/js-fetch-api', () => ({
  GiphyFetch: jest.fn().mockImplementation(() => ({
    random: jest.fn().mockImplementation(() => Promise.resolve(giphy))
  }))
}))

const unmockedFetch = global.fetch
const unmockedEnv = process.env

beforeEach(() => {
  global.fetch = unmockedFetch
  process.env = { ...unmockedEnv }
})

afterEach(() => {
  global.fetch = unmockedFetch
  process.env = unmockedEnv
})
