import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  Linking,
  TouchableWithoutFeedback,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {style} from './styles';

const banners = [
  {
    image: require('../../assets/images/banner1.jpg'),
    link: 'https://www.youtube.com/channel/UCzJXouVMqCNHm_w-lnCq0lA',
  },
  {
    image: require('../../assets/images/banner2.png'),
    link: '',
  },
  {
    image: require('../../assets/images/banner3.jpg'),
    link: 'https://open.spotify.com/show/6d4xOLVBF3B3KT8UycGiWP',
  },
];

export default function Slider() {
  const [autoPlay, setAutoPlay] = useState(true);

  return (
    <Swiper
      onMomentumScrollBegin={() => setAutoPlay(() => false)}
      height={300}
      removeClippedSubviews={false}
      showsButtons
      loop
      autoplay={autoPlay}
      nextButton={<Text style={style.swiperArrows}>›</Text>}
      prevButton={<Text style={style.swiperArrows}>‹</Text>}
      paginationStyle={{bottom: 5}}
      activeDotStyle={style.activeDots}>
      {banners.map((banner, idx) => (
        <TouchableWithoutFeedback style={{padding: 0, margin: 0}} onPress={() => banner?.link ? Linking.openURL(banner.link) : console.log()}>
          <View style={style.slide} key={idx}>
            <Image style={style.sliderImage} source={banner.image} />
          </View>
        </TouchableWithoutFeedback>
      ))}
    </Swiper>
  );
}
