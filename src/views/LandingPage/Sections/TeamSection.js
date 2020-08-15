import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/magaly.jpg";
import team2 from "assets/img/faces/horacio.jpg";
import team3 from "assets/img/faces/moises.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Equipo de trabajo</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Magaly Blas
                <br />
                <small className={classes.smallTitle}>Co-Investigadora principal</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Profesora de la Universidad Peruana Cayetano Heredia (UPCH). Dedicada a diseñar intervenciones que puedan mejorar la salud de madres y niños de áreas rurales de la Amazonía Peruana, ha investigado sobre las Infecciones de Transmisión Sexual y el VIH, y sobre el uso de tecnologías de la información y comunicación para mejorar la salud. 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Horacio Chacon
                <br />
                <small className={classes.smallTitle}>Co-Investigador principal</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Médico cirujano por la Universidad Científica del Sur y maestro en Informática Biomédica con mención en Informática en Salud otorgada por la Universidad Peruana Cayetano Heredia. Cuenta con experiencia en el desarrollo e implementación de tecnologías de información en salud. Áreas de interés: Informática biomédica, ciencia de datos en salud, reproducibilidad científica y salud materno-infantil.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Moises Meza
                <br />
                <small className={classes.smallTitle}>Co-Investigador principal</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Estudiante de Maestria en Informática Biomédica en la UPCH (Universidad Peruana Cayetano Heredia), Ingenierío Electrónico con formación en desarrollo informatico y aplicaciones de control. Amante del hardware y software libre, con alma emprendedora para el desarrollo de proyectos relacionados a INTERNET OF THINGS, ROBÓTICA y EMBEDDED SYSTEMS.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
