import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GoogleMaps from '../GoogleMaps';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const LocalAndFunc = ({ lat, lng }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const endereco = "Av. José Ignácio Bicudo, 101 - Jardim Sao Leopoldo, São José dos Campos - SP, 12228-180";
  const horarios = [
    { dia: "Segunda a Quinta", horario: "9h às 19h" },
    { dia: "Sexta", horario: "9h às 20h" },
    { dia: "Sábado", horario: "9h às 14h" },
    { dia: "Domingo", horario: "Fechado" }
  ];

  return (
    <Card sx={{ maxWidth: 1200, margin: "auto", mt: 5, mb: 5, boxShadow: 3, borderRadius: 2 }}>
      <CardContent sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', paddingBottom: '8px' }}>
        <div style={{ flex: 1, marginRight: isMobile ? '0' : '16px', marginBottom: isMobile ? '16px' : '0' }}>
          <Typography variant="h4" component="div" gutterBottom>
            Barbearia
          </Typography>

          <Typography variant="body1" component="div" gutterBottom>
            <LocationOnIcon color="primary" sx={{ verticalAlign: 'middle', marginRight: '8px' }} />
            {endereco}
          </Typography>

          <Typography variant="h5" sx={{ mt: 2 }}>
            Horário de Funcionamento
          </Typography>
          <List>
            {horarios.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <AccessTimeIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={item.dia} secondary={item.horario} />
              </ListItem>
            ))}
          </List>
        </div>
        <div style={{ flex: 1, height: '450px' }}>
          <GoogleMaps lat={lat} lng={lng} />
        </div>
      </CardContent>
    </Card>
  );
};

export default LocalAndFunc;