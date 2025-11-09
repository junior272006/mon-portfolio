import {
  IconBrandHtml5,
  IconBrandMysql,
  IconBrandReact,
  IconBrandCss3,
  IconBrandDjango,
  IconBrandPython,
  IconBrandGit,
  IconBrandJavascript,
  IconBrandGithub,
} from '@tabler/icons-react';
import {
  Card,
  Group,
  SimpleGrid,
  Text,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import classes from './Tech.module.css';

const mockdata = [
  { title: 'CSS', icon: IconBrandCss3, color: 'violet' },
  { title: 'HTML', icon: IconBrandHtml5, color: 'orange' },
  { title: 'JS', icon: IconBrandJavascript, color: 'yellow' },
  { title: 'Python', icon: IconBrandPython, color: 'blue' },
  { title: 'Django', icon: IconBrandDjango, color: 'green' },
  { title: 'Git', icon:  IconBrandGit, color: 'cyan' },
  { title: 'GitHub', icon:  IconBrandGithub, color: 'orange' },
  { title: 'React', icon:  IconBrandReact, color: 'blue' },
  { title: 'MongoDB', icon: IconBrandMysql, color: 'yellow' },
];

export default function Tech() {
  const theme = useMantineTheme();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group justify="space-between">
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}