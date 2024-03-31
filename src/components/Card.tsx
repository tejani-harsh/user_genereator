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
          <Button size="small">Learn More</Button>
          <Button
            size="small"
            onClick={() => {
              location.reload();
            }}
          >
            Get New User
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
