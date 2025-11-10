import { Button, Group, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core';
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';

function ContactIconsList() {
  const contactData = [
    { icon: IconMail, title: 'Email', description: 'junior27nguetta@gmail.com' },
    { icon: IconPhone, title: 'Téléphone', description: '+2250574093119' },
    { icon: IconMapPin, title: 'Adresse', description: 'Abidjan, Côte d\'Ivoire' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {contactData.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div
              style={{
                backgroundColor: '#4A90E2',
                borderRadius: '8px',
                padding: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon size={24} color="white" />
            </div>
            <div>
              <Text fw={600} style={{ color: '#fff', marginBottom: '0.25rem' }}>
                {item.title}
              </Text>
              <Text size="sm" style={{ color: '#9ca3af' }}>
                {item.description}
              </Text>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Right() {
  const handleSubmit = () => {
    console.log('Formulaire soumis');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: '#0b0b0b',
        color: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 0 25px rgba(0,0,0,0.5)',
        width: '90%',
        margin: '3rem auto',
      }}
    >
      <div
        style={{
          flex: '1 1 350px',
          backgroundColor: '#111',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRight: '1px solid #222',
        }}
      >
        <Text fz="lg" fw={700} mb="xl" style={{ color: '#4A90E2' }}>
          Coordonnées
        </Text>
        <ContactIconsList />
      </div>
      <div
        style={{
          flex: '2 1 500px',
          backgroundColor: '#000',
          color: '#fff',
          padding: '3rem',
        }}
      >
        <Text fz="lg" fw={700} mb="lg" style={{ color: '#fff' }}>
          Envoyez-moi un message
        </Text>
        <div>
          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            <TextInput 
              label="Votre nom" 
              placeholder="Votre nom" 
              required 
              styles={{
                label: { color: '#fff' },
                input: { backgroundColor: '#111', color: '#fff', borderColor: '#333' }
              }}
            />
            <TextInput 
              label="Votre email" 
              placeholder="bonjour@mantine.dev" 
              required 
              styles={{
                label: { color: '#fff' },
                input: { backgroundColor: '#111', color: '#fff', borderColor: '#333' }
              }}
            />
          </SimpleGrid>
          <TextInput 
            mt="md" 
            label="Sujet" 
            placeholder="Sujet" 
            required 
            styles={{
              label: { color: '#fff' },
              input: { backgroundColor: '#111', color: '#fff', borderColor: '#333' }
            }}
          />
          <Textarea
            mt="md"
            label="Message"
            placeholder="Veuillez inclure toutes les informations pertinentes"
            minRows={4}
            styles={{
              label: { color: '#fff' },
              input: { backgroundColor: '#111', color: '#fff', borderColor: '#333' }
            }}
          />
          <Group justify="flex-end" mt="xl">
            <Button
              onClick={handleSubmit}
              style={{
                background: '#4A90E2',
                color: 'white',
              }}
            >
              Envoyer un message
            </Button>
          </Group>
        </div>
      </div>
    </div>
  );
}