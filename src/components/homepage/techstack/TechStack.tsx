import { techStackList } from '@/lib/staticObjects';
import { FancyTitle, FancyTitleSecondary, MainParagraph, PreTitle } from '@/theme/layout/typography';
import React, { useEffect, useState } from 'react';
import { ContentLeft, ContentRight, ContentWrapper, StackWrap, TechList } from './TechStack-css';

const TechStack = () => {
	const [infoOpen, setInfoOpen] = useState<number | null>(null);

	useEffect(() => {
		console.log(infoOpen);
	}, [infoOpen]);
	return (
		<ContentWrapper>
			<ContentLeft>
				<PreTitle></PreTitle>
				<FancyTitle>
					Recent <span>Tech</span> I've Been Working With
				</FancyTitle>
				<MainParagraph>It all started with HTML, CSS, and JavaScript.</MainParagraph>
				<TechList info={infoOpen}>
					{techStackList.map((item) => (
						<li
							onClick={() => setInfoOpen(item.stackPosition)}
							onMouseEnter={() => setInfoOpen(item.stackPosition)}
							onMouseLeave={() => setInfoOpen(null)}>
							<h4>{item.technologie}</h4>
							<ul>
								<li>{item.techInfo}</li>
							</ul>
						</li>
					))}
				</TechList>
			</ContentLeft>
			<ContentRight>
				<StackWrap info={infoOpen}>
					{techStackList.map((item) => (
						<div
							onClick={() => setInfoOpen(item.stackPosition)}
							onMouseEnter={() => setInfoOpen(item.stackPosition)}
							onMouseLeave={() => setInfoOpen(null)}></div>
					))}
				</StackWrap>
			</ContentRight>
		</ContentWrapper>
	);
};

export default TechStack;
