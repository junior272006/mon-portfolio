import { Card, Text, Progress, Stack, Group } from '@mantine/core';

interface Skill {
  name: string;
  level: number;
  color?: string;
}

interface CompetencesProps {
  title?: string;
  skills?: Skill[];
  icon?: React.ReactNode;
}

export default function Competences({ 
  title = "Compétences", 
  skills = [],
  icon
}: CompetencesProps) {
  return (
    <Card 
      p="lg" 
      radius="md" 
      withBorder 
      style={{ 
        backgroundColor: '#0a0a0a', 
        borderColor: '#4A90E2',
        borderLeft: '4px solid #4A90E2',
        color: 'white' 
      }}
    >
      <Group mb="md">
        {icon && <span style={{ color: '#4A90E2' }}>{icon}</span>}
        <Text fw={600} size="xl" style={{ color: 'white' }}>
          {title}
        </Text>
      </Group>
      
      <Stack gap="md">
        {skills.map((skill) => (
          <div key={skill.name}>
            <Text size="sm" mb={8} fw={500} style={{ color: '#e0e0e0' }}>
              {skill.name}
            </Text>
            <Progress 
              value={skill.level} 
              color={skill.color || '#4A90E2'}
              radius="xl" 
              size="md"
              styles={{
                root: { backgroundColor: '#1a1a1a' },
                section: { backgroundColor: skill.color || '#4A90E2' }
              }}
            />
          </div>
        ))}
      </Stack>
    </Card>
  );
}