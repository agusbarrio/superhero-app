import HeroCard from '../../components/HeroCard';
import WithAccessLayout from '../../templates/WithAccessLayout';
import TeamGridLayout from '../../templates/TeamGridLayout';
function HomePage() {
  return (
    <WithAccessLayout>
      <TeamGridLayout>
        <HeroCard
          name="Pruebaasdasdasd"
          imgSrc="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
          stats={{
            combat: 39,
            power: 12,
            durability: 888,
            speed: 34,
            intelligence: 99,
            strength: 4,
          }}
        />
        <HeroCard
          name="Pruebaasdasdasd"
          imgSrc="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
          stats={{
            combat: 39,
            power: 12,
            durability: 888,
            speed: 34,
            intelligence: 99,
            strength: 4,
          }}
        />
        <HeroCard
          name="Pruebaasdasdasd"
          imgSrc="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
          stats={{
            combat: 39,
            power: 12,
            durability: 888,
            speed: 34,
            intelligence: 99,
            strength: 4,
          }}
        />
        <HeroCard
          name="Pruebaasdasdasd"
          imgSrc="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
          stats={{
            combat: 39,
            power: 12,
            durability: 888,
            speed: 34,
            intelligence: 99,
            strength: 4,
          }}
        />
        <HeroCard
          name="Pruebaasdasdasd"
          imgSrc="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
          stats={{
            combat: 39,
            power: 12,
            durability: 888,
            speed: 34,
            intelligence: 99,
            strength: 4,
          }}
        />
        <HeroCard
          name="Pruebaasdasdasafdsafsafsdafsdasd"
          imgSrc="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
          stats={{
            combat: 39,
            power: 12,
            durability: 888,
            speed: 34,
            intelligence: 99,
            strength: 4,
          }}
        />
      </TeamGridLayout>
    </WithAccessLayout>
  );
}

export default HomePage;
