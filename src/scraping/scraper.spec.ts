import { CommonModule } from './../common/common.module'
import { Test, TestingModule } from '@nestjs/testing'
import { Scraper } from './scraper'

describe('Scraper', () => {
  let provider: Scraper

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CommonModule],
      providers: [Scraper],
    }).compile()

    provider = module.get<Scraper>(Scraper)
  })

  it('should be defined', () => {
    expect(provider).toBeDefined()
  })
})
