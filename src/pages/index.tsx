import Body from '@/../components/Body';
import Sidebar from '@/../components/Sidebar';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div style={{display: 'flex'}}>
      <Body />
      <Sidebar />
    </div>
  );
}
