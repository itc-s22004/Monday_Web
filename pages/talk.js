import Layout from "@/components/layout"
import Topic from "@/components/topic"
import logo from "../styles/talk.png"
import Image from 'next/image'
import style from '@/styles/styles.module.css'

const talk = () => {
    return (
        <Layout>
	    <Image className={style.logo} src={logo} />
        <Topic />
        </Layout>
    )
}

export default talk
