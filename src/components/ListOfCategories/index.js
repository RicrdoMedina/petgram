import React, { Fragment, useEffect, useState, useContext } from "react";
import { AutoPlayCarousel } from "../Carousel";
import { Context } from "../../Context";
import { Container } from "./styles";
import { defaultCategories } from "../../util/defaultValues";

function useCategoriesData() {
  const { categories, setCategories } = useContext(Context);
  const { setLoadingCategories } = useContext(Context);

  useEffect(function () {
    if (categories.length === 0) {
      setLoadingCategories(true);
      window
        .fetch("https://petgram-server-ricrdomedina.vercel.app/categories")
        .then((res) => res.json())
        .then((response) => {
          setCategories(response);
          console.log("response", response);
          setTimeout(() => {
            setLoadingCategories(false);
          }, 5000);
        });
    }
  }, []);

  return { categories };
}

const ListOfCategoriesComponent = () => {
  const { categories } = useCategoriesData();
  const listOfCategories =
    categories.length > 0 ? categories : defaultCategories;

  const renderList = () => (
    <Container>
      <AutoPlayCarousel data={listOfCategories} />
    </Container>
  );

  return <Fragment>{renderList()}</Fragment>;
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
