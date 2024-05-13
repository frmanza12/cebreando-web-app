import { useState, useEffect } from "react";
import { CardHeader, Card, CardContent, Typography, Grid, CardActions, Button, IconButton } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate, useParams } from "react-router-dom";
import { ACTIVITIES } from "../../constants/activities";

const Activity = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [activityArray, setActivityArray] = useState(null);

    useEffect(() => {
        const activity_ = ACTIVITIES.filter(activity => activity.id === id);
        if (!activity_) navigate('/');
        setActivityArray(activity_);

    }, [id]);

    if (!activityArray) return null;

    return (
        <>
            {
                activityArray.map(activity => {
                    return (
                        <Grid container direction={'column'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            key={activity.title}
                            style={{ marginTop: '50px' }}
                        >
                            <Grid item className='grid'>
                                <Card className='activity-card'>
                                    <CardHeader
                                        title={activity.title}
                                        subheader={activity.subheader}
                                        style={{
                                            backgroundColor: activity?.color,
                                            color: 'black',
                                            width: '100%'
                                        }}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            <strong>Objetivo de juego:</strong> {activity.objective}
                                        </Typography>
                                        <Typography mt={2} mb={2} variant="body2" color="text.secondary"  >
                                            {activity.description}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <strong>Materiales:</strong>    {activity.materials}
                                        </Typography>
                                    </CardContent>
                                    <CardActions
                                        style={{ justifyContent: 'space-between' }}
                                        disableSpacing>
                                        <Button size="small">Formulario</Button>
                                        <IconButton
                                            aria-label="terminar"
                                            style={{ color: 'green' }}
                                            onClick={() => navigate('/', { state: { id: activity.part } })}
                                        >
                                            <CheckCircleOutlineIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    );
                })
            }
        </>
    );
}
export default Activity;

