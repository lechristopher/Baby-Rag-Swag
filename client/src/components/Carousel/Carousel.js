import React from "react";
import { Grid, Image, Reveal } from "semantic-ui-react";
import "./Carousel.css";

const GridExampleVerticallyDivided = () => (
  <div>
    <Grid divided="vertically">
      <Grid.Row columns={3}>
        <Grid.Column className="carousel-column">
          <Reveal animated="small fade">
            <Reveal.Content visible>
              <Image src="/assets/images/baby1.jpeg" className="carousel" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src="/assets/images/baby2.jpeg" className="carousel" />
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
        <Grid.Column className="carousel-column">
          <Reveal animated="small fade">
            <Reveal.Content visible>
              <Image src="/assets/images/baby1.jpeg" className="carousel" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src="/assets/images/baby2.jpeg" className="carousel" />
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
        <Grid.Column className="carousel-column">
          <Reveal animated="small fade">
            <Reveal.Content visible>
              <Image src="/assets/images/baby1.jpeg" className="carousel" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src="/assets/images/baby2.jpeg" className="carousel" />
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default GridExampleVerticallyDivided
