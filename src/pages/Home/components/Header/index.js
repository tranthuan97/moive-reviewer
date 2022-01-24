import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Rate, Row } from 'antd';
import styles from './styles.module.css';
const bg_1 = 'https://assets.website-files.com/59f5ae906a27c400013267f0/5d2e08b2b78ea88af7876ace_Photo-16.jpg'
const bg_2 = 'https://assets.website-files.com/59f5ae906a27c400013267f0/5d2d9d69b1d789deb64dbca7_Photo-2.jpg'
const bg_3 = 'https://assets.website-files.com/59f5ae906a27c400013267f0/5d2d9dd1358ee9ff811c00f8_Photo-12.jpg'
const bg_4 = 'https://assets.website-files.com/59f5ae906a27c400013267f0/5a0971b3d65a2f0001bcecfd_Photo-10.jpg'

const Header = props => {
  return (
    <Row style={{ height: '80vh', color: 'white' }}>
      <Col style={{ height: '100%' }} span={15}>
        <div className={styles.overlay}>
          <div className={styles.item} >
            <div className={styles.itemScore}>7,9</div>
            <h1 className={styles.itemTitle}>Ace Master X</h1>
            <Row gutter={[16, 16]} align='middle' className='mb-2'>
              <Col><Rate style={{ fontSize: 13, paddingBottom: 5 }} allowHalf defaultValue={4.5} /></Col>
              <Col><span>Comedy Horror</span></Col>
              <Col><span>July 16, 2019</span></Col>
            </Row>
            <p style={{ fontWeight: 500, lineHeight: 2}}>The film takes place in the near future, with Earth in the grip of The Blight, an airborne disease that causes food crops to turn to grey-brown powder. It rolls and billows across the land, piling up around houses and cars like the dust-drifts in Andrei Tarkovsky’s Stalker, another film in which the characters slip between time’s cogs.</p>
            <div className='d-flex justify-content-between'>
              <Button>READ MORE</Button>
              <div>Sarah Brownson</div>
            </div>
          </div>
        </div>
        <div className={styles.backgroundWrapper} style={{ height: '100%', backgroundImage: `url(${bg_1})` }} />
      </Col>
      <Col style={{ height: '100%' }} span={9}>
        <Row style={{ height: '100%' }}>
          <Col className={styles.backgroundWrapper} style={{
            height: '50%',
            backgroundImage: `url(${bg_2})`
          }} span={24}>Gravity Runner</Col>
          <Col style={{ height: '50%' }} span={24}>
            <Row style={{ height: '100%' }}>
              <Col className={styles.backgroundWrapper} style={{
                backgroundImage: `url(${bg_3})`
              }} span={12}>The Girls With All The Gitfs</Col>
              <Col className={styles.backgroundWrapper} style={{
                backgroundImage: `url(${bg_4})`
              }} span={12}>School Rock</Col>
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