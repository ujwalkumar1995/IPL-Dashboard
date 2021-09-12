package com.company.ipldashboard.controller;

import java.time.LocalDate;
import java.util.List;

import com.company.ipldashboard.model.Match;
import com.company.ipldashboard.model.Team;
import com.company.ipldashboard.respository.MatchRepository;
import com.company.ipldashboard.respository.TeamRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@CrossOrigin
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository,MatchRepository matchRepository){
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team")
    public Iterable<Team> getAllTeams(){
        return this.teamRepository.findAll();
    }


        
    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName){
        Team team = this.teamRepository.findByTeamName(teamName);
        team.setMatches(this.matchRepository.findLatestMatchesByTeam(teamName, 4));
        return team;
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName,@RequestParam int year){
        LocalDate startDate = LocalDate.of(year,1,1);
        LocalDate endDate = LocalDate.of(year+1,1,1);
        return this.matchRepository.getMatchesByTeamBetweenDates(
            teamName, 
            startDate, 
            endDate
            );
    }

    @GetMapping("/matches/{team1}/{team2}")
    public List<Match> getMatchesBetweenTwoTeams(@PathVariable String team1,@PathVariable String team2){
        return this.matchRepository.getMatchesBetweenTwoTeams(
            team1, 
            team2
            );
    }

}
