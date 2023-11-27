import './style.css';
import { DayPlan } from './../../components/DayPlan';
import { IconCarousel } from '../../components/IconCarousel';

export const PlannerPage = () => {
  return (
    <main className="container__planner_page">
      <DayPlan />
      <IconCarousel />
    </main>
  );
};
