import { useState, useEffect, useRef, useMemo } from 'react';

import './monitoring.scss';

const Monitoring = ({toggleTaskModal}) => {

    const [visibleScheduleData, setscheduleData] = useState([]);
    const [term, setTerm] = useState('');
    const [sliderPosition, setSliderPosition] = useState(0);
    const [durationAreaWidth, setDurationAreaWidth] = useState(0);

    const durationRef = useRef(null);
    const durationWrapperRef = useRef(null);
    const monthesRef = useRef(null);
    const windowRef = useRef(window);

    const windowWidth = windowRef.current.innerWidth;

    const fetchedData = {
        monthes: ['JAN','FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
        scheduleData: [
            {
                taskName: 'TASK 1',
                duration: '1 JAN - 25 MAR',
                marginLeft: '0px',
                width: '150px'
            },
            {
                taskName: 'TASK 2',
                duration: '6 JAN - 4 APR',
                marginLeft: '10px',
                width: '160px'
            },
            {
                taskName: 'TASK 3',
                duration: '14/1 - 18/3',
                marginLeft: '30px',
                width: '100px'
            },
            {
                taskName: 'TASK 4',
                duration: '1/2 - 9/4',
                marginLeft: '60px',
                width: '120px'
            },
            {
                taskName: 'TASK 5',
                duration: '14 JAN - 24 MAY',
                marginLeft: '30px',
                width: '230px'
            },
            {
                taskName: 'TASK 6',
                duration: '15 FEB - 12 MAY',
                marginLeft: '90px',
                width: '150px'
            },
            {
                taskName: 'TASK 7',
                duration: '20 MAR - 22 JUN',
                marginLeft: '130px',
                width: '190px'
            },
            {
                taskName: 'TASK 8',
                duration: '13 APR - 15 JUL',
                marginLeft: '180px',
                width: '190px'
            }
        ]
    }

    const {scheduleData, monthes} = fetchedData;
    
    /* 62 и 41 - расстояние между элементами + элемент*/
    const updateDurationAreaWidth = (value) => {
        if (value > 800) {
            setDurationAreaWidth(62 * monthes.length); 
        } else {
            setDurationAreaWidth(41 * monthes.length); 
        }
    }

    useEffect(() => {
        updateDurationAreaWidth(windowWidth);
    }, [windowWidth])
    
    
    const onChangeSlider = (value) => {
        setSliderPosition(value);
    };

    const updateSliderPosition = (value) => {
        let offset = value * ((durationAreaWidth - durationWrapperRef.current.clientWidth) / 100);
        durationRef.current.style.transform = `translateX(-${offset}px)`;
        monthesRef.current.style.transform = `translateX(-${offset}px)`;
    }
    
    useEffect(() => {
        updateSliderPosition(sliderPosition);
    }, [sliderPosition]);

    const onUpdateSearchValue = (term) => {
        setTerm(term);
    };

    const searchTask = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.taskName.toLowerCase().indexOf(term) > -1;
        })
    };

    const updateScheduleList = (data, term) => {
        const newData = searchTask(data, term);
        setscheduleData(newData);
    };

    useEffect(() => {
        updateScheduleList(scheduleData, term);
    }, [term]);

    const renderMonthesContent = (data) => {
        const monthesList = data.map((item, i) => {
            return (
                <p key={i}>{item}</p>
            )
        })

        return (
            <div ref={monthesRef} style={{width: durationAreaWidth}} className="monitoring__schedule-monthes">
                {monthesList}    
            </div>
        )
    }

    const renderScheduleContent = (data) => {
        const taskList = data.map((item, i) => {
            return (
                <p onClick={toggleTaskModal} key={i} className="monitoring__schedule-task-name">{item.taskName}</p>
            )
        });

        const durationList = data.map((item, i) => {
            let adoptedWidth = item.width;

            // if (durationAreaWidth === 868) {
            //     adoptedWidth = `${item.width}px`;
            // } else {
            //     adoptedWidth = `${item.width * (41 / 62)}px`;
            // }

            return (  
                <div key={i} className="monitoring__schedule-task-duration">
                    <div onClick={toggleTaskModal} className="monitoring__schedule-task-duration-single" style={{marginLeft: item.marginLeft, width: adoptedWidth}}>{item.duration}</div>
                </div> 
            )
        });

        return (
            <div className="monitoring__schedule-tasks">
                <div className="monitoring__schedule-task-name-list">
                    {taskList}
                </div>
                <div ref={durationWrapperRef} className="monitoring__schedule-task-duration-wrapper">
                    <div ref={durationRef} style={{width: durationAreaWidth}} className="monitoring__schedule-task-duration-list">
                        {durationList}
                    </div>
                </div>
            </div>
        )
    };

    const monthesContent = renderMonthesContent(monthes);

    const scheduleContent = useMemo(() => {
        return renderScheduleContent(visibleScheduleData);
    }, [visibleScheduleData, durationAreaWidth]);

    return (
        <div className="monitoring">
            <p className="monitoring__head">Monitoring of construction</p>
            <div className="monitoring__wrapper">
                <div className="monitoring__schedule-head">
                    <p className="monitoring__schedule">WORK SCHEDULE</p>
                    <input id="monitoring__schedule-slider" onChange={(e) => onChangeSlider(e.target.value)} type="range" value={sliderPosition} min={0} max={100}/>
                </div>
                <div className="monitoring__schedule-dates">
                    <div  className="monitoring__schedule-dates-search">
                        <div id='icon-search'></div>
                        <input type="text" onChange={(e) => onUpdateSearchValue(e.target.value)} value={term}/>
                    </div>
                    <div  className="monitoring__schedule-monthes-wrapper">
                        {monthesContent}
                    </div>
                </div>
                <div className="monitoring__schedule-tasks-wrapper">
                    {scheduleContent}
                </div>
            </div>
        </div>
    )
}

export default Monitoring;