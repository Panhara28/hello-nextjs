import { Layout } from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={ `/post?title=${props.title}` }>
      <a>{ props.title }</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <h1>Hello Production</h1>
    <PostLink title="POST 1"/>
    <PostLink title="POST 2"/>
    <PostLink title="POST 3"/>
  </Layout>
);

export default Index;