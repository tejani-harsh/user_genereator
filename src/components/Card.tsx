import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PopUpCard({
  name,
  country,
  age,
  gender,
}: {
  name: string;
  country: string;
  age: number;
  gender: string;
}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        ></Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {country}
        </Typography>
        <Typography variant="body2">{`${age}- ${gender}`}</Typography>
        <CardActions>
          <Button sx={{ align: "end" }} size="small">
            Learn More
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
