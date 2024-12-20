import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card"

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
			<div>

				<Navbar
					title="Start Boostrap"
					tab1="Home"
					tab2="About"
					tab3="Services"
					tab4="Contact"
				/>

				<div className="container">
					<Jumbotron
						title="A Warm Welcome!"
						text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, ducimus nemo. Maiores cupiditate iure facilis nobis deserunt sequi dolor voluptatem, ad eos consequatur tenetur hic explicabo, reprehenderit itaque animi modi."
						buttonText="Call to action"
					/>

					<div className="row justify-content-between">
						<Card
							imageUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1900&h=1267"
							cardTitle="Grumpy Cat"
							cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptates. Omnis impedit neque officiis accusamus aspernatur dolores odio maxime nostrum."
							buttonText="Find Out More!"
							altText="Gatito enojado"
						/>

						<Card
							imageUrl="https://hips.hearstapps.com/hmg-prod/images/barcelona-city-skyline-with-sagrada-familia-royalty-free-image-1692960079.jpg"
							cardTitle="Barcelona City"
							cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptates. Omnis impedit neque officiis accusamus aspernatur dolores odio maxime nostrum."
							buttonText="Find Out More!"
							altText="Foto de Barcelona"
						/>

						<Card
							imageUrl="https://phantom-elmundo.unidadeditorial.es/4d971e6e9ebcdd14ca12e5cf46e6e87c/resize/1200/f/jpg/assets/multimedia/imagenes/2022/03/09/16468231897426.jpg"
							cardTitle="The Best Beach"
							cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptates. Omnis impedit neque officiis accusamus aspernatur dolores odio maxime nostrum."
							buttonText="Find Out More!"
							altText="foto de la mejor playa de America"
						/>

						<Card
							imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/6c/Momotombo.jpg"
							cardTitle="Momotombo Volcano"
							cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptates. Omnis impedit neque officiis accusamus aspernatur dolores odio maxime nostrum."
							buttonText="Find Out More!"
							altText="Foto de el volcan momotombo Nicaragua"
						/>
					</div>
				</div>

				<div className="container-fluid bg-dark p-2 d-flex justify-content-center">
					<span className="text-white">copyright © by Alcides Contreras 2024</span>
				</div>
			</div>
		</>
	);
};

export default Home;


