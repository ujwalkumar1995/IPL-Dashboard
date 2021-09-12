package com.company.ipldashboard.respository;

import com.company.ipldashboard.model.Match;
import java.util.List;
import java.time.LocalDate;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface MatchRepository extends CrudRepository<Match,Long>{
    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1,String teamName2, Pageable pageable);

    // List<Match> getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(
    //     String teamName1,
    //     LocalDate date1,
    //     LocalDate date2,
    //     String teamName2,
    //     LocalDate date3,
    //     LocalDate date4);

    @Query("select m from Match m where (m.team1 = :team1 and m.team2 = :team2) or (m.team1 = :team2 and m.team2 = :team1) order by date desc")
    List<Match> getMatchesBetweenTwoTeams(@Param("team1") String team1, @Param("team2") String team2);


    @Query("select m from Match m where (m.team1 = :teamName or m.team2 = :teamName) and m.date between :dateStart and :dateEnd order by date desc")
    List<Match> getMatchesByTeamBetweenDates(@Param("teamName") String teamName, @Param("dateStart") LocalDate dateStart,@Param("dateEnd") LocalDate dateEnd);


    default List<Match> findLatestMatchesByTeam(String teamName,int count){
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0,count));
    }

}
