import { projectList } from '@/lib/staticObjects';
import { TextContainer } from '@/theme/layout/containers';
import { FancyTitle, PreTitle } from '@/theme/typography/typography';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import {
	ContentContainer,
	ProjectContainer,
	ProjectContainerMobile,
	ProjectMeta,
	ProjectMetaMobile,
	ProjectPreview,
} from './Projects-css';
import { defineDesktopOrMobile } from '@/util/utilFunctions';

const Projects = () => {
	const [isDesktop, setIsDesktop] = useState<any | null>();

	useEffect(() => {
		setIsDesktop(defineDesktopOrMobile);
		const handleResizeEvent = () => {
			setIsDesktop(defineDesktopOrMobile);
		};
		window.addEventListener('resize', handleResizeEvent);
	}, []);

	if (!isDesktop) {
		return (
			<ContentContainer>
				<TextContainer>
					<PreTitle> Featured Projects</PreTitle>
					<FancyTitle>
						Frontend <span>experiences</span> i&apos;ve created
					</FancyTitle>
				</TextContainer>
				{projectList.map((project, index) => (
					<ProjectContainerMobile preview={project.preview.src} key={index}>
						<ProjectMetaMobile>
							<h2>{project.name}</h2>
							<p>{project.description}</p>
							<ul>
								{project.tech.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
							{project.link ? (
								<a href={project.link} target='_blank' rel='noreferrer'>
									<FontAwesomeIcon icon={faGithub} />
								</a>
							) : (
								<></>
							)}
						</ProjectMetaMobile>
					</ProjectContainerMobile>
				))}
			</ContentContainer>
		);
	} else
		return (
			<ContentContainer>
				<TextContainer>
					<PreTitle> Featured Projects</PreTitle>
					<FancyTitle>
						Some Frontend <span>experiences</span> i&apos;ve created
					</FancyTitle>
				</TextContainer>
				{projectList.map((project, index) => (
					<ProjectContainer order={index} key={index}>
						<ProjectPreview order={index} preview={project.preview.src}>
							<ProjectMeta order={index}>
								<h2>{project.name}</h2>
								<p>{project.description}</p>
								<ul>
									{project.tech.map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</ul>
								{project.link ? (
									<a href={project.link} target='_blank' rel='noreferrer'>
										<FontAwesomeIcon icon={faGithub} />
									</a>
								) : (
									<></>
								)}
							</ProjectMeta>
						</ProjectPreview>
					</ProjectContainer>
				))}
			</ContentContainer>
		);
};

export default Projects;
