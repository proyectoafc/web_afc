import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import mochila from "assets/img/tecnologias/Mochila.jpg";
import app from "assets/img/tecnologias/App.jpg";
import esquema from "assets/img/tecnologias/Esquema.jpg";
// tecnologias
// import Mochila from "../../../assets/img/tecnologias/Mochila.jpg";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Tecnologías desarrolladas</h2>
          <h5 className={classes.description}>
            Proyecto ganador del concurso “Proyectos Especiales: Respuesta al COVID-19” emitido el 27 de marzo del 2020,
            este concurso fue propuesto por el gobierno peruano en búsqueda de respuestas a la emergencia resultante de
            la pandemia del Coronavirus COVID-19. El proyecto busca identificar casos sospechosos de COVID-19 en el área
            de Nauta-Loreto. Con el proyecto se pudo desarrollar 3 tecnologías para facilitar la busqueda de casos sospechosos.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <img src={esquema} />
            <InfoArea
              title="Marco de Trabajo"
              description="Vigilancia activa de personas mayores de 18 años o más sospechosas de COVID-19, realizado mediante visitas domiciliarias por Agentes Comunitarios. Para identificar se usarán termómetros infrarrojos, pulsioximetros y cuestionarios estructurados a todas las personas que habiten dichos domicilios."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img src={app} />
            <InfoArea
              title="Aplicativo móvil"
              description="Los Agentes Comunitarios de Salud están equipados durante sus visitas con dispositivos móviles conectados a internet desde donde podrán registrar y enviar la información que guarden durante sus actividades usando la aplicación de Agentes Frente al COVID-19."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img src={mochila} />
            <InfoArea
              title="Mochila Viajera"
              description="Brinda un medio de transporte seguro, ordenado y con las medidas de seguridad de las herramientas tecnológicas y equipos de protección personal del Agente comunitario."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
