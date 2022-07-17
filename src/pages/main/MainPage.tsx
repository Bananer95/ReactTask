import React from "react";

//layout
import { MainLayout } from "../../layouts";

//sections
import FeaturedSection from "./sections/Featured";
import RecentSection from "./sections/Recent";

const MainPage = () => {
	return (
		<MainLayout>
			<div className="container">
				<div className="mainheading">
					<h1 className="sitetitle">Mediumish</h1>
					<p className="lead">Bootstrap theme, medium style, simply perfect for bloggers</p>
				</div>
				<FeaturedSection />
				<RecentSection />
			</div>
		</MainLayout>
	);
};

export default MainPage;
