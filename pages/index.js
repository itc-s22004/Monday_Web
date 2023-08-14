import Image from 'next/image'
import Image_Pic from 'pic/wordwolf.jpg'
import Layout from '@/components/layout'
// import styles from '@/styles/utils.module.css'

const Home = () => {
  return (
    <>
      <Layout>
        <figure>
          <Image
            src={Image_Pic}
            alt=""
            style={{ width: 280, height: 200 }}
            priority
            placeholder='blur'
          />
        </figure>
        <div >
          <h3>お喋り、会話</h3>
          <a href="/talk">気まZゲーム</a>
        </div>
        <div >
          <h3>ゲーム</h3>
          <a href="/game">ワードウルフ</a>
        </div>
      </Layout>
    </>
  )
}

export default Home
