import type { FC } from 'react'
import Container from '@/app/(root)/_common/components/Container'
import Headline1 from '@/app/(root)/_common/components/Headline1'
import { Link } from '@nextui-org/link'
import Image from 'next/image'
import Pic1 from './pic1.jpg'
import Pic2 from './pic2.jpg'

const IndexPage: FC = () => {
  return (
    <Container>
      <Headline1>部室</Headline1>
      <p>
        <Link href="https://x.com/Arthur1__">Arthur</Link>
        の自宅のリビングをプレイスペースにしています。ボードゲームやカードゲームなどを楽しむことができます。
      </p>
      <p>
        ただの自宅ですので、一般には貸し出していません。遊びに来る知人向けに本サイトを公開しています。
      </p>
      <p>Arthurと知り合いで利用して遊びたい方はご連絡ください。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Image
          alt="伸縮するダイニングテーブルに6人分の椅子が並べられている。テーブルの上にはプレイマットが敷かれている。"
          src={Pic1}
          className="w-full h-auto object-cover"
          priority={false}
        />
        <Image
          alt="スタッキングシェルフに様々なボードゲームや、カードゲームのデッキが収納されている。"
          src={Pic2}
          className="w-full h-auto object-cover"
          priority={false}
        />
      </div>
    </Container>
  )
}

export default IndexPage
