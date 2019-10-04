import React, { Fragment,useState, useEffect, useRef } from 'react';
import ItemsCarousel from './ItemsCarousel';
import { Category } from '../Category'
import { Button } from './Button'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { Wrapper, SlideItem } from './styles'

const noOfCards = 3;
const autoPlayDelay = 6000;
const chevronWidth = 40;

const renderItems = (data) => (data.map((item) => <SlideItem key={item.id}><Category {...item} path={`/pet/${item.id}`} /></SlideItem>))

function useInterval(callback, delay) {
  let savedCallback = useRef()

  useEffect(() => {
     savedCallback.current = callback
  }, [callback]);

  useEffect(() => {
     function tick() {
       savedCallback.current();
     }
     if (delay !== null) {
       let id = setInterval(tick, delay);
       return () => clearInterval(id);
     }
  }, [delay]);
}

export const AutoPlayCarousel = ({data = []}) => {
  const [items, setItems] = useState([])
  const [noOfItems, setNoOfItems] = useState(0)
  const [activeItemIndex, setActiveItemIndex] = useState(0)

  const onChange = (value) => {
    setActiveItemIndex(value)
  }

  const callback = () => {
    const newActiveIndex = (activeItemIndex + 1) % (noOfItems-noOfCards + 1)
    setActiveItemIndex(newActiveIndex)
  };

  useEffect(function () {
    const lengthItems = data.length

    if (noOfItems === 0 || lengthItems > noOfItems) {
      const collection = renderItems(data)
      setItems(collection)
      setNoOfItems(lengthItems)
    }

  }, [data])

  useInterval(callback, autoPlayDelay)

  const renderList = () => {
    if (noOfItems > 0) {
      return (
        <Wrapper chevronWidth={chevronWidth}>
          <ItemsCarousel
            gutter={noOfItems}
            numberOfCards={3}
            activeItemIndex={activeItemIndex}
            requestToChangeActive={onChange}
            rightChevron={<Button><MdKeyboardArrowRight size='22px'/></Button>}
            leftChevron={<Button><MdKeyboardArrowLeft size='22px'/></Button>}
            chevronWidth={chevronWidth}
            outsideChevron
            children={items}
          />
        </Wrapper>
      )
    }

    return null
  }

  return (
    <Fragment>
      {renderList()}
    </Fragment>
  )
}

  // export default class AutoPlayCarousel extends React.Component {
  //   state = {
  //     activeItemIndex: 0,
  //     data: [],
  //     noOfItems: 0,
  //   };

  //   componentDidMount() {
  //     const { data } = this.props
  //     const noOfItems = data.length

  //     if (noOfItems > 0) {
  //       const items = this.renderItems(data)
  //       this.setState({
  //         data: items,
  //         noOfItems
  //       })
  //     }
  //     this.interval = setInterval(this.tick, autoPlayDelay);
  //   }

  //   componentWillUnmount() {
  //     clearInterval(this.interval);
  //   }

  //   tick = () => {
  //     const { noOfItems } = this.state
  //     debugger
  //      this.setState(prevState => {
  //        debugger
  //        return ({activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1)})
  //        }
  //      )
  //    };

  //   onChange = (value) => { 
  //     debugger 
  //     return this.setState({ activeItemIndex: value }) 
  //   };

  //   renderItems = (data) => (data.map((item) => <SlideItem key={item.id}><Category {...item} path={`/pet/${item.id}`} /></SlideItem>))

  //   render() {
  //     const { noOfItems, data } = this.state

  //     if (noOfItems > 0) {
  //       return (
  //         <Wrapper>
  //           <ItemsCarousel
  //             gutter={noOfItems}
  //             numberOfCards={3}
  //             activeItemIndex={this.state.activeItemIndex}
  //             requestToChangeActive={this.onChange}
  //             rightChevron={<Button><MdKeyboardArrowRight size='22px'/></Button>}
  //             leftChevron={<Button><MdKeyboardArrowLeft size='22px'/></Button>}
  //             chevronWidth={chevronWidth}
  //             outsideChevron
  //             children={data}
  //           />
  //         </Wrapper>
  //       );
  //     }
  //     return null
  //   }
  // }