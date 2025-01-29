import { Card, CardContent, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PriceList = () => {
  const prices = [
    { name: "Básico", price: "R$29,90/mês", features: ["1 Usuário", "10GB de Armazenamento", "Suporte via Email"] },
    { name: "Padrão", price: "R$59,90/mês", features: ["5 Usuários", "50GB de Armazenamento", "Suporte Prioritário"] },
    { name: "Premium", price: "R$99,90/mês", features: ["Usuários Ilimitados", "Armazenamento Ilimitado", "Suporte 24/7"] },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", padding: "20px" }}>
      {prices.map((plan, index) => (
        <Card key={index} sx={{ maxWidth: 300, boxShadow: 3, borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" textAlign="center">
              {plan.name}
            </Typography>
            <Typography variant="h6" color="primary" textAlign="center">
              {plan.price}
            </Typography>
            <List>
              {plan.features.map((feature, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  {feature}
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PriceList;
