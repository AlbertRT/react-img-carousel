# react-img-carousel


## Installation

Install React
```bash
npm create vite@latest
```

Install react-icons

```bash
npm install react-icons
```

## Usage/Examples

```javascript
import { CarouselContainer, CarouselItem } from "./components/Carousel-Img/ImgCarousel";

function App() {
    const imgList = [
		{
			src: "./src/img/1.jpg",
		},
		{
			src: "./src/img/2.jpg",
		},
		{
			src: "./src/img/3.jpg",
		}
	];
    <div className="container">
        <CarouselContainer itemPerScreen={4}>
            {imgList.map((img, key) => (
                <CarouselItem src={img.src} key={key} index={key} />
            ))}
		    </CarouselContainer>
    </div>
}
```


## Reference


| Parameter | Type     | Description | Required |
| :-------- | :------- | :----------- | :------ |
| `itemPerScreen` | `int` | displays how many images will be displayed on the screen | **true**
| `src` | `string` | image source to be displayed | **true**
| `index` | `number` | the index of an image element | **true**


