import Layout from "@/components/layout"
import Topic from "@/components/topic"
// import logo from "../styles/talk.png"
import Image from 'next/image'

const talk = () => {
    return (
        <Layout>
	    {/* <Image className="logo" src={logo} /> */}
        <Topic />
        </Layout>
    )
}

export default talk
