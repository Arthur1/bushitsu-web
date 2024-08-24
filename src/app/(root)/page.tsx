import type { FC } from 'react'
import Container from '@/app/(root)/_common/components/Container'
import Headline1 from '@/app/(root)/_common/components/Headline1'
import { Link } from '@nextui-org/link'

const IndexPage: FC = () => {
  return (
    <Container>
      <Headline1>部室</Headline1>
      <p>
        <Link href="https://x.com/Arthur1__">Arthur</Link>
        の自宅のリビングをプレイスペースにしています。
      </p>
      <p>
        ただの自宅ですので、一般には貸し出していません。遊びに来る知人向けに本サイトを公開しています。
      </p>
      <p>Arthurと知り合いで利用して遊びたい方はご連絡ください。</p>
    </Container>
  )
}

export default IndexPage
