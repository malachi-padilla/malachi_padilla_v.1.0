import { techStackList } from '@/lib/staticObjects';
import { FancyTitle, MainParagraph, PreTitle } from '@/theme/typography/typography';
import React, { useState } from 'react';
import { ContentLeft, ContentRight, ContentWrapper, StackWrap, TechList } from './TechStack-css';

const TechStack = () => {
	const [infoOpen, setInfoOpen] = useState<number | null>(null);

	return (
		<ContentWrapper>
			<ContentLeft>
				<PreTitle>Current Stack</PreTitle>
				<FancyTitle>
					Tech I&apos;ve Been <span>Working</span> With
				</FancyTitle>
				<MainParagraph>It all started with HTML, CSS, and JavaScript.</MainParagraph>
				<TechList info={infoOpen}>
					{techStackList.map((item, index) => (
						<li key={index} onClick={() => setInfoOpen(item.stackPosition)}>
							<h4>{item.technology}</h4>
							<ul>
								<li>{item.techInfo}</li>
							</ul>
						</li>
					))}
				</TechList>
			</ContentLeft>
			<ContentRight>
				<StackWrap info={infoOpen}>
					{techStackList.map((item, index) => (
						<div
							key={index}
							onClick={() => setInfoOpen(item.stackPosition)}
							onMouseEnter={() => setInfoOpen(item.stackPosition)}></div>
					))}
				</StackWrap>
			</ContentRight>
		</ContentWrapper>
	);
};

export default TechStack;
