import CityInfoDisplay from "../../components/cityInfoDisplay/cityInfoDisplay"
import CityLocationDisplay from "../../components/cityLocationDisplay/cityLocationDisplay"
import CityWeatherDisplay from "../../components/cityWeatherDisplay/cityWeatherDisplay"
import HeaderComponent from "../../components/header/headerComponent"
import ItemComponent from "../../components/itemComponent/itemComponent"
import SearchBar from "../../components/searchBar/searchBar"

export default function SearchPage() {
    return (
        <HeaderComponent >
            <SearchBar />
            <ItemComponent>
                <CityInfoDisplay />
            </ItemComponent>
            <ItemComponent>
                <CityWeatherDisplay />
            </ItemComponent>
            <ItemComponent>
                <CityLocationDisplay />
            </ItemComponent>
        </HeaderComponent >
    )
}