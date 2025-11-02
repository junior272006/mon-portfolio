import { AppShell, Burger,Group,Stack,Grid,Text,Image,Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconDownload } from '@tabler/icons-react';
import Header from './Header';
export default function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
       <Header/>
      </AppShell.Header>
      <br /><br /><br /><br /><br />
      <AppShell.Main style={{ padding: 0, margin: 0, width: "100vw" }}>
       <Grid>
 <Grid.Col span={{ base: 12, md: 6 }}>
    <Text size="48px" >
        Bonjour moi c'est
        </Text> 
        <Text 
    size="48px" 
    fw={900} 
    className="animated-gradient-text"
   style={{ 
      lineHeight: 1.3,
      background: 'linear-gradient(270deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #06b6d4)',
      backgroundSize: '400% 400%',
      animation: 'gradient-flow 8s ease infinite',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }}
  >
     N'guetta Kadjo Junior
  </Text>
    <Text size="48px" >
        Developpeur Web passionné
    </Text>
    <br />
 <Button rightSection={<IconDownload size={14} />}>Telechargez mon CV</Button>
  </Grid.Col>
  <Grid.Col span={{ base: 12, md: 6 }}>
    <Image src="votre-photo.jpg" alt="Photo" />
  </Grid.Col>
</Grid>
<br />
 <>
<Grid gutter="xl" style={{ width: "100vw", padding: "3rem 2rem", margin: 0 }}>
<Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
<div style={{
background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
padding: "2.5rem",
borderRadius: "20px",
textAlign: "center",
fontSize: "28px",
fontWeight: 800,
color: "white",
boxShadow: "0px 8px 20px rgba(0,0,0,0.25)",
transition: "all .3s ease",
cursor: "pointer"
}}
className="gradient-card"
>
<Text>2+</Text>
<Text>Mois d'experience</Text>
</div>
</Grid.Col>


<Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
<div style={{
background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
padding: "2.5rem",
borderRadius: "20px",
textAlign: "center",
fontSize: "28px",
fontWeight: 800,
color: "white",
boxShadow: "0px 8px 20px rgba(0,0,0,0.25)",
transition: "all .3s ease",
cursor: "pointer"
}}
className="gradient-card"
>
<Text>2+</Text>
<Text>Projets</Text>

</div>
</Grid.Col>


<Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
<div style={{
background: "linear-gradient(135deg, #f59e0b, #ef4444)",
padding: "2.5rem",
borderRadius: "20px",
textAlign: "center",
fontSize: "28px",
fontWeight: 800,
color: "white",
boxShadow: "0px 8px 20px rgba(0,0,0,0.25)",
transition: "all .3s ease",
cursor: "pointer"
}}
className="gradient-card"
>
 <Text>3+</Text>
<Text>Diplomes</Text>   
</div>
</Grid.Col>
</Grid>
 
</>
      </AppShell.Main>
    </AppShell>
  );
}