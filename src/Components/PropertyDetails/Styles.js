import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    padding: RFPercentage(2),
    backgroundColor: '#fff',
  },
  // Progress
  ProgressContainer: {
    height: RFPercentage(5),
    // backgroundColor: '#0ff',
    justifyContent: 'center',
  },
  ProgressBackgroundColor: {
    backgroundColor: '#23aa7025',
  },
  // StepTExt
  StepText: {
    fontSize: RFPercentage(2.7),
    color: '#000',
    fontWeight: '700',
  },
  StepTExtUnder: {
    color: '#23AA6F',
    fontSize: RFPercentage(1.7),
    marginTop: RFPercentage(0.4),
  },
  // inputs titles
  titleText: {
    fontSize: RFPercentage(2.1),
  },
  // unit Size
  UnitSizeContainer: {
    // backgroundColor: '#0ff',
    height: RFPercentage(12),
    justifyContent: 'space-around',
  },
  UnitSizeTextInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: RFPercentage(1),
    paddingHorizontal: RFPercentage(2),
    color: '#000',
  },
  // Sectoins
  SectionMainContainer: {
    // backgroundColor: '#00f',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: RFPercentage(15),
    alignItems: 'center',
  },
  ContainerOfPlusAndMinus: {
    // width: '20%',
    width: RFPercentage(21),
    backgroundColor: '#F8F6F7',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: RFPercentage(7.5),
    borderRadius: RFPercentage(0.8),
    borderWidth: 1,
    borderColor: '#cccccc8a',

    // alignItems: 'center',
  },
  //minus
  minus: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // plus
  plus: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // number
  NumberContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: RFPercentage(1),
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // number text
  NumberText: {fontSize: RFPercentage(2.5), color: '#000'},
  // FooterContainer
  FooterContainer: {
    backgroundColor: '#fff',
    height: RFPercentage(13),
    shadowColor: '#1dab51',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: RFPercentage(2),
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 6.65,

    elevation: 12,
  },
  // back bottom
  Back: {
    borderWidth: 1,
    width: RFPercentage(22),
    justifyContent: 'center',
    alignItems: 'center',
    height: RFPercentage(7),
    borderRadius: 5,
    borderColor: '#23AA6F',
  },
  Next: {
    backgroundColor: '#23AA6F',
    color: '#fff',
  },
  // textFooter
  TextFooter: {
    fontSize: RFPercentage(2.2),
    color: '#23AA6F',
    fontWeight: '700',
  },
  // Yes No
  yes: {
    backgroundColor: '#23AA6F',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yesText: {
    color: '#fff',
    fontSize: RFPercentage(2.2),
    fontWeight: '500',
  },
  no: {
    // backgroundColor: '#23AA6F',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noText: {
    color: '#000',
    fontSize: RFPercentage(2.2),
    fontWeight: '500',
  },
  // selected buttom
  selectedButtom: {
    backgroundColor: '#23AA6F',
  },
  // selected text
  selectedText: {
    color: '#fff',
  },
  // ACtype
  ACContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    height: RFPercentage(8),
  },
  Actype: {
    flex: 1,
    // backgroundColor: '#0cf',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFPercentage(1),
  },
  // ImageContainer
  ImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    paddingVertical: RFPercentage(5),
    width: RFPercentage(44.8),
    // backgroundColor: '#00d',
    borderRadius: 5,
    // marginRight: 4,
  },
  // ImageBackground
  ImageBackground: {
    // backgroundColor: '#f0f',
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
    width: RFPercentage(45),
    // height: RFPercentage(34),
    padding: 15,
  },
});

export default styles;
