import {IconBrandTwitter, IconMail, IconPhone, IconMapPin, IconBrandLinkedin, IconBrandWhatsapp } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text, Box } from '@mantine/core';
import classes from './Footer.module.css';
import React from 'react';

interface LinkItem {
  label: string;
  link: string;
  icon?: React.ReactNode;
}

interface GroupItem {
  title: string;
  links: LinkItem[];
}

const data: GroupItem[] = [
  {
    title: 'Navigation',
    links: [
      { label: 'Accueil', link: '#' },
      { label: 'A Propos', link: '#' },
      { label: 'Compétences', link: '#' },
      { label: 'Projets', link: '#' },
    ],
  },
  {
    title: 'Contacts',
    links: [
      { label: 'junior27nguetta@gmail.com', icon: <IconMail size={16} />, link: '#' },
      { label: '+2250574093119', icon: <IconPhone size={16} />, link: '#' },
      { label: "Abidjan, Côte d'Ivoire", icon: <IconMapPin size={16} />, link: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text size="xl" fw={900} className={classes.gradientText}>
            JUNIOR
          </Text>
          <Text size="xs" c="dimmed" className={classes.description}>
            Passionné par le développement web, je crée des applications modernes et accessibles, alliant créativité et rigueur technique.
          </Text>
        </div>

        <div className={classes.groups}>
          {data.map((group: GroupItem) => (
            <div className={classes.wrapper} key={group.title}>
              <Text className={classes.title}>{group.title}</Text>
              {group.links.map((link: LinkItem, index: number) => (
                <Box
                  key={index}
                  component="a"
                  href={link.link}
                  className={classes.link}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  {link.icon && <span>{link.icon}</span>}
                  <span>{link.label}</span>
                </Box>
              ))}
            </div>
          ))}
        </div>
      </Container>

      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2025 Junior Dev. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandWhatsapp size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
