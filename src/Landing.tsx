import {
  Container,
  Grid,
  Title,
  Text,
  Button,
  Box,
  Image,
} from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import Tech from './Tech';
import Competences from './Competences';
import {
  IconNetwork,
  IconCode,
  IconPalette,
  IconUser,
} from '@tabler/icons-react';

export default function Landing() {
  return (
    <Box style={{ backgroundColor: '#000', minHeight: '100vh', width: '100%' }}>
      <Container size="xl" py="xl" style={{ padding: '2rem' }}>
      
        <Grid gutter="xl" align="flex-start">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={1} c="white" style={{ fontSize: '48px' }}>
              Bonjour moi c'est
            </Title>
            <Title
              order={1}
              style={{
                fontSize: '48px',
                lineHeight: 1.3,
                background:
                  'linear-gradient(270deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #06b6d4)',
                backgroundSize: '400% 400%',
                animation: 'gradient-flow 8s ease infinite',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              N'guetta Kadjo Junior
            </Title>
            <Text size="48px" c="white">Développeur Web passionné</Text>

            <Button
              style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', marginTop: '1rem' }}
              rightSection={<IconDownload size={14} />}
            >
              Téléchargez mon CV
            </Button>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src="votre-photo.jpg" alt="Photo" radius="md" />
          </Grid.Col>
        </Grid>

    
        <Grid gutter="xl" style={{ marginTop: '3rem' }}>
          {[
            { value: '2+', label: "Mois d'expérience" },
            { value: '2+', label: 'Projets' },
            { value: '3+', label: 'Diplômes' },
          ].map((item, i) => (
            <Grid.Col key={i} span={{ base: 12, md: 4 }}>
              <Box
                style={{
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  padding: '2rem',
                  borderRadius: '20px',
                  textAlign: 'center',
                  fontSize: '28px',
                  fontWeight: 800,
                  color: 'white',
                  boxShadow: '0px 8px 20px rgba(0,0,0,0.25)',
                }}
              >
                <Text>{item.value}</Text>
                <Text>{item.label}</Text>
              </Box>
            </Grid.Col>
          ))}
        </Grid>

      
        <Text
          size="xl"
          mt="xl"
          style={{ letterSpacing: 0.4, fontWeight: 'bold', textAlign: 'center', color: 'white' }}
        >
          À propos de moi
        </Text>
        <Grid mt="md">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text
              size="lg"
              style={{
                lineHeight: 1.7,
                fontWeight: 600,
                fontSize: '18px',
                textAlign: 'justify',
                color: '#e0e0e0',
                marginTop: '1rem',
              }}
            >
              Je m'appelle Junior, passionné par le développement. Curieux et ambitieux, j'aime apprendre, comprendre et créer des projets qui apportent des solutions concrètes.
              <br /><br />
              Motivé et orienté travail d'équipe, je cherche toujours à évoluer et à améliorer mes compétences.
            </Text>
          </Grid.Col>
<Grid.Col span={{ base: 12, md: 6 }}>
  <Box
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '400px' }}>
      <rect width="400" height="400" fill="#000000"/>
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor:'#6BA4E7', stopOpacity:1 }} />
          <stop offset="50%" style={{ stopColor:'#4A90E2', stopOpacity:1 }} />
          <stop offset="100%" style={{ stopColor:'#2E5C8A', stopOpacity:1 }} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g transform="translate(200, 140)">
        <text 
          x="0" y="0" textAnchor="middle" fontFamily="'Arial Black', sans-serif" fontSize="42" fontWeight="900"
          fill="url(#blueGradient)" filter="url(#glow)">
          INNOVATION
        </text>
      </g>
      <g transform="translate(200, 200)">
        <text x="0" y="0" textAnchor="middle" fontFamily="'Arial', sans-serif" fontSize="28" fontWeight="300" fill="#FFFFFF" opacity="0.9">
          &amp;
        </text>
      </g>
      <g transform="translate(200, 255)">
        <text x="0" y="0" textAnchor="middle" fontFamily="'Arial Black', sans-serif" fontSize="42" fontWeight="900" fill="#FFFFFF" filter="url(#glow)">
          RIGUEUR
        </text>
      </g>
      <line x1="80" y1="90" x2="140" y2="90" stroke="#4A90E2" strokeWidth="3" opacity="0.6" filter="url(#softGlow)"/>
      <line x1="260" y1="90" x2="320" y2="90" stroke="#4A90E2" strokeWidth="3" opacity="0.6" filter="url(#softGlow)"/>
      <line x1="80" y1="300" x2="140" y2="300" stroke="#FFFFFF" strokeWidth="3" opacity="0.4" filter="url(#softGlow)"/>
      <line x1="260" y1="300" x2="320" y2="300" stroke="#FFFFFF" strokeWidth="3" opacity="0.4" filter="url(#softGlow)"/>
      <circle cx="70" cy="90" r="4" fill="#4A90E2" opacity="0.8"/>
      <circle cx="330" cy="90" r="4" fill="#4A90E2" opacity="0.8"/>
      <circle cx="70" cy="300" r="4" fill="#FFFFFF" opacity="0.6"/>
      <circle cx="330" cy="300" r="4" fill="#FFFFFF" opacity="0.6"/>
      <g transform="translate(200, 340)" opacity="0.5">
        <text x="0" y="0" textAnchor="middle" fontFamily="'Georgia', serif" fontSize="14" fontStyle="italic" fill="#FFFFFF" letterSpacing="2">
          Créativité · Excellence · Engagement
        </text>
      </g>
      <g opacity="0.15">
        <path d="M 50 50 L 55 45 M 50 50 L 45 55" stroke="#4A90E2" strokeWidth="2" fill="none"/>
        <path d="M 350 350 L 345 355 M 350 350 L 355 345" stroke="#FFFFFF" strokeWidth="2" fill="none"/>
      </g>
    </svg>
  </Box>
</Grid.Col>



        </Grid>

     
        <Text
          size="xl"
          mt="xl"
          style={{ letterSpacing: 0.4, fontWeight: 'bold', textAlign: 'center', color: 'white' }}
        >
          Mes Langages
        </Text>
        <Tech />

      
        <Text
          size="xl"
          mt="xl"
          style={{ letterSpacing: 0.4, fontWeight: 'bold', textAlign: 'center', color: 'white' }}
        >
          Mes Compétences
        </Text>
        <Container size="xl" py="xl" style={{ minHeight: '100vh' }}>
          <Grid gutter="lg">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Competences
                title="Réseaux & Systèmes"
                icon={<IconNetwork size={28} />}
                skills={[
                  { name: 'Réseaux Informatiques', level: 85 },
                  { name: 'Windows & Linux', level: 75 },
                  { name: 'VirtualBox & VMWare', level: 70 },
                ]}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Competences
                title="Développement Web"
                icon={<IconCode size={28} />}
                skills={[
                  { name: 'HTML5', level: 90 },
                  { name: 'CSS3', level: 85 },
                  { name: 'JS & React', level: 75 },
                ]}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Competences
                title="Design Graphique"
                icon={<IconPalette size={28} />}
                skills={[
                  { name: 'Photoshop', level: 80 },
                  { name: 'Illustrator', level: 70 },
                  { name: 'Canva', level: 70 },
                ]}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Competences
                title="Compétences Personnelles"
                icon={<IconUser size={28} />}
                skills={[
                  { name: "Travail d'équipe", level: 90 },
                  { name: 'Communication', level: 85 },
                  { name: 'Leadership', level: 85 },
                ]}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
