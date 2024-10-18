import React from 'react'
//Не забываем импортировать компонент
import Card from './Card';

function CardList() {
    return (
        <React.Fragment>
            <Card
                name = "Бетмен"
                universe = "DC Comics"
                alterego = "Брюс Уэйн"
                occupation = "борец с преступностью, филантроп, миллиардер"
                friends = "Робин, Бэтгерл"
                superpowers = "интеллект, обширные познания, знания боевых искусств, ловкость"
                url = "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
                photo = "photo of the hero"
                info = "По популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом. Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций."
            />
             <Card
                name = "Супермен"
                universe = "DC Comics"
                alterego = "Кларк Кент"
                occupation = "борец за справедливость"
                friends = "собака Крипто"
                superpowers = "непробиваемость, суперсила, полёт, самоисцеление, суперзрение и суперслух, классный костюм"
                url = "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg"
                photo = "photo of the hero"
                info = "Полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты."
            />
            <Card
                name = "Дэдпул"
                universe = "Marvel Comics"
                alterego = "Уэйд Уинстон Уилсон"
                occupation = "антигерой, наёмник"
                friends = "частично Мстители, Человек-паук, Росомаха"
                superpowers = "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система"
                url = "https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/728x382_1_cc2a743fd686b7b2e256c062966bb465@1034x543_0xac120002_2692921231540468872.jpg"
                photo = "photo of the hero"
                info = "Как и Росомаха из Людей Икс, Дэдпул был подвергнут опытам по программе «Оружие Икс». Ученые попытались исцелить его рак, привив его клеткам способность к регенерации. Как и всегда в комиксах, что-то пошло не так, и Дэдпул остался изуродованным и психически нестабильным. Это единственный супергерой из списка, который однозначно не на стороне добра. Дэдпул наслаждается насилием. Первоначально появившись в основной Вселенной Marvel, он получил альтернативные варианты в других реальностях Мультивселенной. Что оставалось неизменным — его циничное, чёрное чувство юмора: за него Дэдпула прозвали «Болтливым наёмником»"
            />
        </React.Fragment>
    );
}

export default CardList;