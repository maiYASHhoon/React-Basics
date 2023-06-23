import NewsListItem from "./news_list_item";

const NewsList = (props) => {
    const news = props.news.map((item, i) => <NewsListItem key={item.id} item={item} />);
    return <>{news}</>;
};

export default NewsList;
