import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    height: 89,
    width: 94,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  home: {
    color: '#110E94',
    alignSelf: 'center',
    fontSize: 22,
    marginTop: 35,
    marginBottom: 20,
  },

  mainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
    paddingBottom: 10,
  },
});

const images = [];

for (let i = 0; i < 24; i++) {
  if (i % 4 === 0) {
    images.push({
      src:
        'https://si.wsj.net/public/resources/images/B3-DM067_RIGHTS_IM_20190319162958.jpg',
      index: i,
    });
  } else if (i % 4 === 1) {
    images.push({
      src:
        'https://blogs.umass.edu/natsci397a-eross/files/2015/04/Small-House-Plan-Features-31.jpg',
      index: i,
    });
  } else if (i % 4 === 2) {
    images.push({
      src:
        'https://assets.blog.hgtv.ca/wp-content/hgtv-wp/2017/09/24230714/Shaughnessy3.jpg',
      index: i,
    });
  } else {
    images.push({
      src:
        'https://jamaicaclassifiedonline.com/images/2018/08/21/53390/thumb_building-plansblueprints-ql5w86rn_1.jpg',
      index: i,
    });
  }
}

export { images };
