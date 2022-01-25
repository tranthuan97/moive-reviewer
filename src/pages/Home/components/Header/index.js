import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Rate, Row } from 'antd';

import styles from './styles.module.css';

import bg_1 from '../../utils/images/AceMasterX.jpg';
import bg_2 from '../../utils/images/GravityRunner.jpg';
import bg_3 from '../../utils/images/TheGirlsWithAllTheGifts.jpg';
import bg_4 from '../../utils/images/SchoolRock.jpg';

import tag from '../../utils/icons/tag.svg';
import clock from '../../utils/icons/clock.svg';

const HighlightCard = ({ point, title, genre, time, content, isReadMore, readMoreHref, actor, image, isLeftSize }) => {
  return (
    <React.Fragment>
      <div className={styles.overlay}>
        <div className={styles.item} >
          <div className={styles.itemScore}>{point}</div>
          <h1 className={isLeftSize ? styles.itemTitle1 : styles.itemTitle2}>{title}</h1>
          <Row gutter={[16, 16]} align='middle' className='mb-2'>
            <Col><Rate disabled style={{ fontSize: 13, paddingBottom: 5, whiteSpace: 'nowrap' }} allowHalf defaultValue={4.5} /></Col>
            <Col style={{ fontSize: 14 }}><img style={{ width: 15, height: 15 }} src={tag} alt="icon" /> <u>{genre}</u></Col>
            {time && <Col style={{ fontSize: 14 }}><img style={{ width: 15, height: 15 }} src={clock} alt="icon" /> <span>{time}</span></Col>}
          </Row>
          <p style={{ fontWeight: 500, lineHeight: 2 }}>{content}</p>
          {isReadMore && <div className='d-flex justify-content-between'>
            <Button>READ MORE</Button>
            <div>{actor}</div>
          </div>}
        </div>
      </div>
      <div className={styles.backgroundWrapper} style={{ height: '100%', backgroundImage: `url(${image})` }} />
    </React.Fragment>
  )
}

const Header = props => {
  return (
    <Row style={{ height: '80vh', color: 'white' }}>
      <Col className={styles.colItem} style={{ height: '100%' }} span={15}>
        <HighlightCard
          point='7,9'
          title='Ace Master X'
          genre='Comedy Horror'
          time='July 16, 2019'
          content='The film takes place in the near future, with Earth in the grip of The Blight, an airborne disease that causes food crops to turn to grey-brown powder. It rolls and billows across the land, piling up around houses and cars like the dust-drifts in Andrei Tarkovsky’s Stalker, another film in which the characters slip between time’s cogs.'
          isReadMore={true}
          isLeftSize={true}
          actor='Sarah Brownson'
          image={bg_1}
        />
      </Col>
      <Col style={{ height: '100%' }} span={9}>
        <Row style={{ height: '100%' }}>
          <Col className={styles.colItem} style={{ height: '50%' }} span={24}>
            <HighlightCard
              point='7,9'
              title='Gravity Runner'
              genre='Superhero'
              time='July 16, 2019'
              isReadMore={true}
              actor='Jonathan Lewis'
              image={bg_2}
            />
          </Col>
          <Col style={{ height: '50%' }} span={24}>
            <Row style={{ height: '100%' }}>
              <Col className={styles.colItem} span={12}>
                <HighlightCard
                  point='7,9'
                  title='The Girl With All The Gifts'
                  genre='Thriller'
                  image={bg_3}
                />
              </Col>
              <Col className={styles.colItem} span={12}>
                <HighlightCard
                  point='7,9'
                  title='School Rock'
                  genre='Sience-Fiction'
                  image={bg_4}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

Header.propTypes = {

};

export default Header;