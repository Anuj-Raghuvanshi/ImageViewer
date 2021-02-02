import React, { useEffect } from 'react'

import {
	SafeAreaView,
	Dimensions,
	View,
	Image,
	PixelRatio,
	Platform,
	FlatList
} from 'react-native'

import { connect } from 'react-redux'

import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { getCarouselImages, getGridImages } from '../../redux/Home/actions'

let Home = (props) => {

	const dimension = Dimensions.get('window')
	const insets = useSafeAreaInsets();

	useEffect(() => {
		props.getCarouselImages()
		props.getGridImages()
	}, [])


	const ph = (height) => PixelRatio.roundToNearestPixel(dimension.height * height / 100)
	const pw = (width) => PixelRatio.roundToNearestPixel(dimension.width * width / 100)

	const  _renderItem = ({item}) => {
		return (
			<View style={{
				height: ph(35),
				borderWidth: 1,
				borderRadius: 5,
				padding: 2
			}}>
				<Image style={{
					flex: 1,
					resizeMode: 'contain',
				}} source={{uri: item}} resizeMode="cover"/>
			</View>
		);
	} 

	const _renderCarouselItem = () => (
		<Carousel
				layout={'tinder'}
				data={props.carouselImages}
				renderItem={_renderItem}
				sliderWidth={dimension.width}
				itemWidth={pw(90)}
				style={{
					marginRight: 200
				}}
			/>
	)

	const _renderGrid = ({item}) => {
		return (
			(
				<View style={{
					width: Platform.isPad || dimension.width > dimension.height ? pw(22) : pw(45),
				}}>
					<Image style={{
						resizeMode: 'contain',
						margin: 2
					}} source={{uri: item}} height={150} resizeMode="cover"/>
				</View>
			)
		)
	}

	return (
		<SafeAreaView
      style={{  
				height: '100%',
				paddingTop: insets.top,
				paddingBottom: insets.bottom
			}}
    >
      {_renderCarouselItem()}

			<FlatList 
				key={(Platform.isPad || dimension.width > dimension.height) ? 'w' : 'h'}
				style={{
					marginTop: 20,
					flexGrow: 1,
					paddingHorizontal: 20,
				}}
				data={props.gridImages}
				numColumns={(Platform.isPad || dimension.width > dimension.height) ? 4 : 2}
				renderItem={(item) => _renderGrid(item)}
				keyExtractor={(item, index) => index.toString()}
			/>
    </SafeAreaView>
	)
}

function bindAction(dispatch) {
	return {
		getCarouselImages: getCarouselImages(dispatch),
		getGridImages: getGridImages(dispatch)
	};
}

const mapStateToProps = state => ({
	carouselImages: state.picsForCarousel,
	gridImages: state.picsForGridView
});

Home = connect(
	mapStateToProps,
	bindAction
)(Home);

export default Home