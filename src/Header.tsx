import { useState } from 'react';
import { Burger, Container, Group, Paper, Transition, Text, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

const links = [
  { link: '/accueil', label: 'Accueil' },
  { link: '/about', label: 'A propos' },
  { link: '/skills', label: 'Compétences' },
  { link: '/projets', label: 'Projets' },
  { link: '/contact', label: 'Contacts' },
];

export default function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header} style={{background:"black"}}>
      <Container size="md" className={classes.inner} >
      
        <Box
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <Text
            size="xl"
            fw={900}
            variant="gradient"
            style={{
              lineHeight: 1.3,
              background: 'linear-gradient(270deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #06b6d4)',
              backgroundSize: '400% 400%',
              animation: 'gradient-flow 8s ease infinite',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            JUNIOR
          </Text>
        </Box>

     
        <Group gap={5} visibleFrom="sm" >
          {items}
        </Group>

      
       <Burger
  opened={opened}
  onClick={toggle}
  color="white"  
  className={classes.burger}
/>


      
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </header>
  );
}
