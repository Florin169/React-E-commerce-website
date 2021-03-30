import React, { useEffect } from "react";
import "../styles/favorite.css";
import { useDispatch, useSelector } from "react-redux";
import {
  favoriteActions,
  removeFromFavorite,
} from "../actions/favoriteActions";
import { useParams } from "react-router-dom";

const FavoriteList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { favoriteItems } = useSelector((state) => state.favorite);

  useEffect(() => {
    dispatch(favoriteActions(id));
  }, [dispatch, id]);

  const removeFavoriteHandler = (id) => {
    dispatch(removeFromFavorite(id));
  };

  return (
    <section className="favorite">
      {favoriteItems.length > 0 ? (
        favoriteItems.map((item) => {
          return (
            <div className="favorite-list">
              <div className="fav-image">
                <img src={item.image[0]} alt="" />
                <h3>{item.name}</h3>
              </div>
              <p>${item.price}</p>
              <button onClick={() => removeFavoriteHandler(item._id)}>
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <div className="empty-cart">
          <h2>Your Favorite List is Empty</h2>
        </div>
      )}
    </section>
  );
};

export default FavoriteList;
