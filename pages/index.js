import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Image_Log from 'pic/----.jpg'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <div>
      {/* <figure>
        <Image
          src={Image_Log}  //--------------写真ない
          alt=""
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder='blur'
        />
      </figure> */}
      <div className='TalkGame'> 
        <h3>お喋り,話題ゲーム</h3>
        <h2>決まZゲーム</h2>
      </div>
      <div className='WordWolf'>
        <h3>ゲーム</h3>
        <h2>ワードウルフ  </h2>
      </div>

    </div>
  )
}

export default Home