import React, { collections } from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import "./shop.styles.scss";

const shopPage = ({ collections }) => (
  <div className="shop-page">
    <CollectionsOverview />;
  </div>
);

export default shopPage;
