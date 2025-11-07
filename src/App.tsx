import { AppShell, Grid, Text, Image, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconDownload } from '@tabler/icons-react';
import Header from './Header';
import Tech from './Tech';
import Footer from './Footer';
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
        backgroundColor: "#000000", // 👈 fond noir global
        color: "white",
      }}
    >
     
        <Header />
     

      <br /><br /><br /><br /><br />

      <AppShell.Main
        style={{
          padding: 0,
          margin: 0,
          width: "100vw",
          minHeight: "100vh",
          backgroundColor: "#000000", // 👈 fond noir
          color: "white",
        }}
      >
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text size="48px" fw={500} c="white">
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
                backgroundClip: 'text',
              }}
            >
              N'guetta Kadjo Junior
            </Text>

            <Text size="48px" fw={500} c="white">
              Développeur Web passionné
            </Text>

            <br /><br />

            <Button
              style={{
                background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
              }}
              rightSection={<IconDownload size={14} />}
            >
              Téléchargez mon CV
            </Button>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src="votre-photo.jpg" alt="Photo" radius="md" />
          </Grid.Col>
        </Grid>

        <br />

        <>
          <Grid gutter="xl" style={{ width: "100vw", padding: "3rem 2rem", margin: 0 }}>
            {[
              { value: "2+", label: "Mois d'expérience" },
              { value: "2+", label: "Projets" },
              { value: "3+", label: "Diplômes" },
            ].map((item, i) => (
              <Grid.Col key={i} span={{ base: 12, md: 4, lg: 4 }}>
                <div
                  style={{
                    background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                    padding: "2.5rem",
                    borderRadius: "20px",
                    textAlign: "center",
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "white",
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.25)",
                    transition: "all .3s ease",
                    cursor: "pointer",
                  }}
                  className="gradient-card"
                >
                  <Text>{item.value}</Text>
                  <Text>{item.label}</Text>
                </div>
              </Grid.Col>
            ))}
          </Grid>

          <br />

          <Text
            size="xl"
            mt="md"
            style={{ letterSpacing: 0.4, fontWeight: "bold", textAlign: 'center', color: 'white' }}
          >
            À propos de moi
          </Text>

          <br /><br />

          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Text
                size="lg"
                w={500}
                style={{
                  lineHeight: 1.7,
                  fontWeight: 600,
                  fontSize: "18px",
                  textAlign: "justify",
                  color: "#e0e0e0",
                  marginTop: "1rem",
                }}
              >
                Je m’appelle Junior, passionné par l’informatique et le développement. Curieux et ambitieux, j’aime apprendre, comprendre et créer des projets qui apportent des solutions concrètes.

                <br /><br />

                J’ai déjà travaillé sur des applications web avec VB.NET, Access, React, Mantine et la gestion de bases de données, ainsi que sur des projets en réseaux, comptabilité et maths appliquées.

                <br /><br />

                Motivé, ouvert et orienté travail d’équipe, je cherche toujours à évoluer et à améliorer mes compétences. Originaire d’Afrique de l’Ouest, j’avance avec des valeurs fortes : famille, partage et persévérance.

                <br /><br />

                Aujourd’hui, je continue à bâtir mon parcours tech et à développer mon portfolio — un projet à la fois 🚀
              </Text>

              <br /><br />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="400" fill="#000000" />

                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#6BA4E7", stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: "#4A90E2", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#2E5C8A", stopOpacity: 1 }} />
                  </linearGradient>

                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter id="softGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <g transform="translate(200, 140)">
                  <text
                    x="0"
                    y="0"
                    textAnchor="middle"
                    fontFamily="'Arial Black', sans-serif"
                    fontSize="42"
                    fontWeight="900"
                    fill="url(#blueGradient)"
                    filter="url(#glow)"
                  >
                    INNOVATION
                  </text>
                </g>

                <g transform="translate(200, 200)">
                  <text
                    x="0"
                    y="0"
                    textAnchor="middle"
                    fontFamily="'Arial', sans-serif"
                    fontSize="28"
                    fontWeight="300"
                    fill="#FFFFFF"
                    opacity="0.9"
                  >
                    &amp;
                  </text>
                </g>

                <g transform="translate(200, 255)">
                  <text
                    x="0"
                    y="0"
                    textAnchor="middle"
                    fontFamily="'Arial Black', sans-serif"
                    fontSize="42"
                    fontWeight="900"
                    fill="#FFFFFF"
                    filter="url(#glow)"
                  >
                    RIGUEUR
                  </text>
                </g>

                <line x1="80" y1="90" x2="140" y2="90" stroke="#4A90E2" strokeWidth="3" opacity="0.6" filter="url(#softGlow)" />
                <line x1="260" y1="90" x2="320" y2="90" stroke="#4A90E2" strokeWidth="3" opacity="0.6" filter="url(#softGlow)" />
                <line x1="80" y1="300" x2="140" y2="300" stroke="#FFFFFF" strokeWidth="3" opacity="0.4" filter="url(#softGlow)" />
                <line x1="260" y1="300" x2="320" y2="300" stroke="#FFFFFF" strokeWidth="3" opacity="0.4" filter="url(#softGlow)" />

                <circle cx="70" cy="90" r="4" fill="#4A90E2" opacity="0.8" />
                <circle cx="330" cy="90" r="4" fill="#4A90E2" opacity="0.8" />
                <circle cx="70" cy="300" r="4" fill="#FFFFFF" opacity="0.6" />
                <circle cx="330" cy="300" r="4" fill="#FFFFFF" opacity="0.6" />

                <g transform="translate(200, 340)" opacity="0.5">
                  <text
                    x="0"
                    y="0"
                    textAnchor="middle"
                    fontFamily="'Georgia', serif"
                    fontSize="14"
                    fontStyle="italic"
                    fill="#FFFFFF"
                    letterSpacing="2"
                  >
                    Créativité · Excellence · Engagement
                  </text>
                </g>

                <g opacity="0.15">
                  <path d="M 50 50 L 55 45 M 50 50 L 45 55" stroke="#4A90E2" strokeWidth="2" fill="none" />
                  <path d="M 350 350 L 345 355 M 350 350 L 355 345" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                </g>
              </svg>
            </Grid.Col>
          </Grid>

          <br /><br />

          <Text
            size="xl"
            mt="md"
            style={{ letterSpacing: 0.4, fontWeight: "bold", textAlign: 'center', color: 'white' }}
          >
            Mes Langages
          </Text>

          <Tech />
        </>
      </AppShell.Main>
     
<Footer/>
      
    </AppShell>
  );
}
