import * as React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import {
  cn,
  generateYearRange,
  captalizeFirstChar,
  generateMonthNames,
} from '@/lib/utils';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '@/components/ui/select';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const monthNames = React.useMemo(() => generateMonthNames(props.locale), []);
  const [month, setMonth] = React.useState<Date>();
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100'
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside:
          'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
        CaptionLabel: ({ displayMonth }) => {
          const monthName = captalizeFirstChar(
            format(displayMonth, 'MMMM', { locale: props.locale })
          );
          const year = format(displayMonth, 'yyyy');

          function handleChangeMonth(monthName: string) {
            const newDate = new Date(displayMonth);
            const monthIndex = monthNames.indexOf(monthName);
            newDate.setMonth(monthIndex);
            props.onMonthChange
              ? props.onMonthChange(newDate)
              : setMonth(newDate);
          }

          function handleChangeYear(year: string) {
            const newDate = new Date(displayMonth);
            newDate.setFullYear(Number(year));
            props.onMonthChange
              ? props.onMonthChange(newDate)
              : setMonth(newDate);
          }

          return (
            <div className="flex gap-2">
              <Select onValueChange={handleChangeMonth} value={monthName}>
                <SelectTrigger className="w-fit border-0 p-0 h-fit gap-2">
                  <SelectValue placeholder={monthName} />
                </SelectTrigger>
                <SelectContent>
                  {monthNames.map((monthName) => (
                    <SelectItem key={monthName} value={monthName}>
                      {monthName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={handleChangeYear} value={year}>
                <SelectTrigger className="w-fit border-0 p-0 h-fit gap-2">
                  <SelectValue placeholder={year} />
                </SelectTrigger>
                <SelectContent>
                  {generateYearRange(props.fromYear, props.toYear)
                    .map(String)
                    .map((yearName) => (
                      <SelectItem key={yearName} value={yearName}>
                        {yearName}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          );
        },
      }}
      {...props}
      month={props.month || month}
      onMonthChange={props.onMonthChange || setMonth}
      defaultMonth={
        (props.selected as Date | undefined) || props.month || month
      }
    />
  );
}

Calendar.displayName = 'Calendar';

export { Calendar };
