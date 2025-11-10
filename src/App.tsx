import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Header from './Header';
import Footer from './Footer';
import Right from './Right';
import Landing from './Landing';
export default function App() {
  const [opened] = useDisclosure();

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      style={{
        backgroundColor: '#000000',
        color: 'white',
      }}
    >
      <Header />

      <br /><br /><br /><br /><br />

      <AppShell.Main
       style={{
    padding: 0,
    margin: 0,
    minHeight: '100vh',
    backgroundColor: '#000000',
    color: 'white',
    boxSizing: 'border-box', 
    width: '100%',
  }}
      >
       
       <Landing/>
        
        <div style={{ padding: '4rem 2rem', backgroundColor: '#000' }}>
          <Right />
        </div>
      </AppShell.Main>

      <Footer />
    </AppShell>
  );
}